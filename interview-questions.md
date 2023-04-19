# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer: It is classified as a child therefore it inherets the parents attributes.

Researched answer: Calling super inside of a method of a class classifies it as the child of the original class but there has to be an established realtionship when creating the child class ex: class Dog < Animal. In the previous expample the Animal would be the Parent class and the Dog would be the child class. When calling the super in the example below it will invoke the speak method in the parent class then it will follow the logic down and invoke the speak method that is in the child class as well. If we where to call Cat.new.speak it would output both of the puts in each class since both method are being invoked by using the super classification. On the contrary if there was no puts on the Cat class it and called the same Cat.new.speak it would just print "animal speaks". A super call can take no arguments or multiple arguments.

ex:
class Animal
def speak
puts "Animal speaks"
end
end

class Cat < Animal
def speak
super
puts "Cat meows"
end
end
(horrible indentation sorry. md file kept moving it back)
https://www.rubyguides.com/2018/09/ruby-super-keyword/

2. What is a gem?

Your answer: It is an active record that is used to manage data.

Researched answer: It is a package managaer for Ruby programming language specifically such as yarn is to JavaScript. Gem is used to add code code snippets and dependencies for your code. Examples of the most popular Gems : Rails(databases mgmnt) and Rspec(testing). Gems typically consist of three main components code, files, and documentation. They are also open source meaning that anyone can create a gem and they are able to be installed and used for free and shared through public repositories.

https://guides.rubygems.org/what-is-a-gem/

3. What is a relational database? Are there other kinds of databases?

Your answer:I am not sure how to define a realtional database.

Researched answer: A Relational database is a a type of storage that is organized in tables and those tables represent an element or relationship between elements. In this type of database the data is stores in tables that consist of rows and columns. Each one of the rows represents an instance of the element, and the columns represent an attributes of the instance. Each row would have a primary key that is a unique identifier for the row to be called on or manipulated. A user is able to establish relationships between tables by using a common field or a key. A relational database uses a structured query language (SQL) to manage or retrive the data. There are other types of databases such as:
Hierarchical- Has a tree like structure that is a very rigid structure and realtionships are pre-defined such as the folder system in our computers.
Network- Has a tree like structure that is a bit more flexible than hierarchical the children can have more that one realtion to a parent.
Object oriented- Unstructures or semi-structured but uses key-values in some cases.
Depending on the type opf data that you are storing or industry that your are in one of the databases my be better suited that the others for your specific needs. In web development the relational is the one most widely used.

https://www.nibusinessinfo.co.uk/content/types-database-system

4. What are primary keys? Why are they important?

Your answer: primary key is the unique identifying item for the instance of the class.

Researched answer: Similar to arrays that use a index system to track the values of the data that it is storing that is one way we can think of a primary key to a database table. It is a unique identifier that does not change over time it is consistent and it give the user the abilty to retrive data and manipulate data effieciently and with out adding it to the worng column. One of the other functions is that the primary key is used to reference relationships of tables inside of the database. Just like a drivers license number or a social security number for an adult those numbers are unique to eah person and are not repreated think about someone having your sasme social security number that would create a significant amount of confusing when applying for a new job or when you go to the hospital when your information is pulled and wanting to be verified there would be multiple people under that same number. This could be applied to when calling information form a database and you are trying to call a specific set of data but the return has many entries that come back to you making harder to decipher and can cause consfusion.

https://www.simplilearn.com/tutorials/sql-tutorial/primary-key-in-sql#:~:text=The%20primary%20key%20in%20SQL,unique%20values%20for%20each%20row.

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: It is list of commands that communicates from the front-end of an application to the backend.

Researched answer: Hypertext transfer protocol it enables communication from user to servers and works through a request-response system where there needs to be a request or input first then the server will return something back. They indicate the desired action to be preformed on a given resource. The most common HTTP verbs(methods):
GET -> Read
POST -> Create
PUT -> Update/Replace
PATCH -> Update/Modify
DELETE -> Delete
OPTIONS
CONNECT
TRACE

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Model validations: It is way that you can make sure that the data that is going to be stored in the database meet a specific requirtement that we can set. There are biult-in validations or you can create a custom validation as well.

2. RESTful routes: Representational state transfer is a architectual style that is a mapping of the HTTP verbs, controller actions, and CRUD in a database for file routings. In Ruby on Rails there are 7 default routes that are generated.

3. ERB: Embedded Ruby it is a Ruby templating language that combines HTML or plain text and Ruby code.

4. Params:The way that the can communicate and pass information it handels the user input on a website or application such as entering data and preform actions based on input

5. API: This stands for application programming interface this is a way in which computer programs or applications communicate with each other.
