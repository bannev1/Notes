import React from 'react';
import fs from 'fs';
import path from 'path';
import Folder from './Folder';

const contentDir = path.join(process.cwd(), 'src', 'content', 'IB');

const getFilesRecursively = (dir: string): Array<{ name: string, path: string[], isDirectory: boolean, children?: any[] }> => {
  const files = fs.readdirSync(dir, { withFileTypes: true }); // Ensure 'withFileTypes' is set to true

  return files.map((file) => {
    const res = path.join(dir, file.name);

    if (!res.includes('.md')) {
      return {
        name: file.name,
        path: path.relative(contentDir, res).split(path.sep),
        isDirectory: true,
        children: getFilesRecursively(res),
      };
    } else {
      return {
        name: file.name.replace(/\.md$/, ''),
        path: path.relative(contentDir, res).replace(/\.md$/, '').split(path.sep),
        isDirectory: false,
      };
    }
  });
};

function SideNav() {
  const filesAndFolders = getFilesRecursively(contentDir);

  return (
    <div>
      <div id="sideNav">
        <h3>Navigation</h3>
        <br />
        <ul className='sideNavBar'>
          {filesAndFolders.map((item, index) => (
            <li key={index}>
              {item.isDirectory ? (
                <Folder folder={item} padding={0} />
              ) : (
                <a href={`/IB/${item.path.join('/')}`}>
                  {item.name.replace(/-/g, ' ')} 
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div id="sideNavFiller"></div>
    </div>
  );
}

export default SideNav;
