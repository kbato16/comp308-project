#Group Project – Developing Apps using emerging Web Technologies

##Due Date:	Week 13.

##Purpose:	The purpose of this project is to:
•	Design and code web apps using emerging Web Frameworks
•	Build a Rest API using Express
•	Build a Front-End (Angular or React) that utilizes the Rest API 
•	Apply appropriate design patterns and principles


Be sure to read the following general instructions carefully:
-	You will have to demonstrate your solution in Week 13 and upload the solution on eCentennial through the project link in Dropbox folder, as well as publish it on Microsoft Azure Cloud, Amazon, or another Cloud platform.
-	You VS project name should be named “YourGroupNameCOMP308Project” and should be zipped in a file YourGroupNameCOMP308Project.zip.

##Project Specifications

Your client needs an application to help nurse practitioners to monitor patients during the first weeks of their release from the hospital and also help the patients to monitor their daily activities. Develop a web app that implements the following functionalities:

1.	User registration/login

2.	If the user is a **nurse**:
       - Allow the user to enter vital signs: body temperature, heart rate, blood pressure, or respiratory rate.
       - Allow the user to access information captured during a previous clinical visit, vital signs: body temperature, heart rate, blood pressure, or respiratory rate.
       - Allow the user to send daily motivational tips to the patient (by storing them in the database and providing a daily tips page for the patient to view, etc.).

3.	If the user is a **patient**:
       - Allow the user to create and send an emergency alert to first responders (by storing this in a separate collection)
       - Allow the user to run motivational video or games that encourage their physical exercises at home.
       - Allow the user to enter daily information as specified by the doctor/nurse practitioner (for example pulse rate, blood pressure, weight, temperature, respiratory rate).
       - Allow the user to use a checklist of common signs and symptoms, to generate a list of possible medical conditions and advice on when to consult a healthcare provider.

Use MongoDB for storing the information. 
Apply MVC and responsive web design principles. Use CSS to create a nice look and feel of your app. Display the logo for the application, other images, game objects, etc. 
										                                       (100 marks)

### Some choices for Rest API frameworks:
•	Express (main choice)
•	Meteor
•	Sails.js
•	Hapi.js
•	Restify

### Some choices for front-end frameworks:
•	Angular 2 or higher
•	React 16 or higher
•	Vue.js

##Evaluation:
###Functionality:	
- [ ] **10%** Mongo DB database (proper use of document structure)
- [ ] **40%** Rest API MVC (proper use of design patterns)
- [ ] **30%** Front End
### **10%** Friendliness	
### **10%** Innovation (intelligent use of symptoms using machine learning)	
###Total	100%