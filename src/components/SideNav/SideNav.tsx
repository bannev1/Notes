import React from 'react';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Folder from './Folder';

// Helper function to generate file paths
const contentDir = path.join(process.cwd(), 'src', 'content', 'IB');

const getFilesRecursively = (dir: string): Array<{ name: string, path: string[], isDirectory: boolean, children?: any[] }> => {
  const files = fs.readdirSync(dir, { withFileTypes: true }); // Ensure 'withFileTypes' is set to true

  return files.map((file) => {
    const res = path.join(dir, file.name);

    if (!res.includes('.md')) {
      // If it's a directory, return an object indicating it is a directory
      return {
        name: file.name,
        path: path.relative(contentDir, res).split(path.sep), // Split the path into segments
        isDirectory: true, // Mark it as a directory
        children: getFilesRecursively(res), // Recursively fetch its children
      };
    } else {
      // If it's a file, return the file information
      return {
        name: file.name.replace(/\.md$/, ''), // Remove `.md` for readability
        path: path.relative(contentDir, res).replace(/\.md$/, '').split(path.sep), // Ensure path is split into an array
        isDirectory: false, // Mark it as a file
      };
    }
  });
};

// SideNav Component
function SideNav() {
  // Get the files and folders dynamically
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
                <Link href={`/IB/${item.path.join('/')}`}>
                  {item.name.replace(/-/g, ' ')} {/* Display the name of the file */}
                </Link>
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
