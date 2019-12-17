<!DOCTYPE html>
<html>
<head>
<style>
* {
  box-sizing: border-box;
}

input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .col-25, .col-75, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
}
</style>
</head>
<body>

<h2>Responsive Form</h2>
<p>Resize the browser window to see the effect. When the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other.</p>

<div class="container">
  <form action="/action_page.php">
  <div class="row">
    <div class="col-25">
      <label for="fname">FIRST NAME</label>
    </div>
    <div class="col-75">
      <input type="text" id="fname" name="firstname" pattern='[a-zA-Z ]*$' title='Please enter Alphabets only'placeholder="Your name..">
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="lname">LAST NAME</label>
    </div>
    <div class="col-75">
      <input type="text" id="lname" name="lastname" pattern='[a-zA-Z ]*$' title='Please enter Alphabets only' placeholder="Your last name..">
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="ID">ID</label>
    </div>
    <div class="col-75">
		<input type="text" id="id" name="id" pattern='(^[0][1-9]+)|([1-9]\d*)' title='Please Enter Numbers only' placeholder="Your Enterprise Id...">
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="ID">Salary</label>
    </div>
    <div class="col-75">
		<input type="text" id="sal" name="lastname" maxlength='6' onfocusout='maxSal()' placeholder="Your salary...">
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="subject">DOB</label>
    </div>
    <div class="col-75">
		<input type="date" id="lname" name="lastname" placeholder="Your Enterprise Id...">
    </div>
  </div>
  <div class="row">
    <input type="submit" value="Submit"/>
  </div>
  </form>
</div>
<span id="numberError" style="color: Red; display: none">*Valid characters: Numbers and space.
</span>
<span id="digitsError" style="color: Red">
</span>
<script>
 function maxSal() {
 var isValid=false;
 var regex=/^[0-9\s]*$/;
 isValid = regex.test(document.getElementById("sal").value);
 if(isValid===true){
 if((document.getElementById("sal").value)>100000)
 { document.getElementById("digitsError").style.display="Please enter a value between 1 to 100000";
 }
 else{
 console.log("Valid value");	
 }
 }
 else{
 document.getElementById("numberError").style.display = !isValid ? "block" : "none";
 return isValid;
}
  }
</script>
</body>
</html>
