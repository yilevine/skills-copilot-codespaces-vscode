function skillsmember {
    var skills = ["HTML", "CSS", "JS", "PHP", "MySQL"];
    var member = {
        name: "John",
        age: 25,
        skills: skills
    };
    document.write(member.skills[0]);
    }       
    skillsmember(); 
    // Output: HTML
```
### 3. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
```javascript
// Path: delete.js
function deleteRollno {
    var student = {
        name : "David Rayy",
        sclass : "VI",
        rollno : 12 };
    document.write(student);
    delete student.rollno;
    document.write(student);
    }
    deleteRollno();
    // Output: Object { name: "David Rayy", sclass: "VI", rollno: 12 } Object { name: "David Rayy", sclass: "VI" }
```