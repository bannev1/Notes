# D.1 - Objects
***

## Table of Contents
- [D.1 - Objects](#d1---objects)
	- [Table of Contents](#table-of-contents)
	- [D.1.1 - The general nature of an object](#d11---the-general-nature-of-an-object)
	- [D.1.2 - Distinguish between an object and an instance](#d12---distinguish-between-an-object-and-an-instance)

## D.1.1 - The general nature of an object

**Object Oriented Progamming** *(OOP for short)* is a method of designing software which makes it easier for programmers to write and maintain complex programs.  

It is based on the concept of objects, and allows people to create an abstraction for the properties and behaviors of different classes of objects.  

Following this idea, essentially everything in a program is an object.

**Object** is a specific instance of a class *(covered later)* which encapsulates data as **attributes** and behavior as **methods** all into a single entity - an instance of a class.

**Class** is a blueprint for creating objects. It defines the attributes and methods that an object will have.

With these definitions in mind, we can say that OOP is a way of programming that is based on the concept of objects, which can contain data in the form of attributes and code in the form of methods.

OOP was actually designed after reality - the entire idea that everything in real life is an object, *i.e a person, a car, a house, etc...* and this is a great way of thinking of it.

For example, we could have a **class** named `Person`. Every existing person, including you, me, and everyone else, would be an **object** created from the blueprint/class `Person`. This class tells us what each `Person` can do and what each `Person` has.

Writing this example as a simple Java program would look something like the following:

```java
class Person {
	String name; // Each person has a name
	int age; // Each person has an age

	void speak() {
		System.out.println("I am speaking");
	}

	void run() {
		System.out.println("I am running");
	}
}
```

The above code creates a **class** named `Person`. Each person, including you and me, all follow this blueprint and have a name, age, can speak, run, etc... So to create an **object**, meaning to create a person, we can do the following:

```java
Person me = new Person();
```

Now the variable, `me`, is an **object** of the class Person. It has a name, age, and can speak and run. 

We can say that `me` is an **instance** of the class `Person`, which basically means that `me`, the variable, uses the blueprint defined as the class `Person`, and contains everything the class `Person` tells it to have as its own and can do whatever it wants with these values without affecting anything else.

Another way of thinking of this idea of classes and objects is to note that data types, `int`, `String`, `double`, etc... are all **classes**. Meaning when we create a new string, we are creating an object using the `String` class blueprint.

```java
String myString = "Hello There."; // String is a class, and we're using it as a blueprint to create a string
```

This `String` class has its own methods *(i.e `split()`, `length()`)* and you can create an **instance** *(covered later)* of this class simply by using `""`.

You might note that terminology such as **attributes** and **methods** are consistently mentioned throughout this page. To define them, they are, essentially, what a class contains. 

**Attributes** could be considered as the variables of a class, and **methods** could be considered as the functions of a class. Essentially, these two could be used by the main program using this class to manipulate the object's properties. 

Take the aforementioned `Person` class as an example - each person in real life has a name and an age, therefore normally we'd store these as variables. But as we're using OOP, we'd store these as **attributes**. Any person created from the `Person` class has these attributes.

## D.1.2 - Distinguish between an object and an instance

**Instantiation**, or to create an **instance**, is essentially what we do when we use the class blueprint to create an **object**.
