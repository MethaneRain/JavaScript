<!DOCTYPE html>
<html>
<body>

<p>Click the button if you want to test my patience</p>

<button onclick="myFunction('Fella','tough guy','you should not have done that!')">Don't Do It...</button>


<p id="demo"></p>

<p><br></br></p>


<p>Check out my Python maps :)</p>
<button onclick="showPicture('tornado')">Tornado Storm Reports</button>
<img style="display:none;" id = 'tornado'>

<button onclick="showPicture('GOES')">GOES</button>
<img style="display:none;" id = 'GOES'>

<button onclick="showPicture('MSLP')">MSLP and Thickness</button>
<img style="display:none;" id = 'MSLP'>




<script>

//import java.util.Scanner;  // Import the Scanner class

//class MyClass {
//  public static void main(String[] args) {
//    Scanner myObj = new Scanner(System.in);  // Create a Scanner object
//    System.out.println("Enter username");

//    String userName = myObj.nextLine();  // Read user input
//    System.out.println("Username is: " + userName);  // Output user input
//  }
//}


function myFunction(name,job,comment) {
  document.getElementById("demo").innerHTML = "OUCH! " + name + ", you " + job + ", " + comment;
}



function showPicture(Var) {
  //var FileName = "/Users/chowdahead/Desktop/Weather_Case_Studies/DDC_Radar_Reflectivity_thredds_2019_08_25_0215Z.png"
  //var FileName = "https://raw.githubusercontent.com/MethaneRain/Weather-Jupyter-Notebooks/master/Sample-Maps/Tornado_190520_MAF.png";
  if (Var == 'tornado') {
    FileName = "https://raw.githubusercontent.com/MethaneRain/Weather-Jupyter-Notebooks/master/Sample-Maps/Tornado_190520_MAF.png";
  }


  if (Var == 'GOES') {
    FileName = "https://raw.githubusercontent.com/MethaneRain/Weather-Jupyter-Notebooks/master/GOES%20Satellite%20Maps/Sample%20Maps/GOES16_Ch13_2019_03_13_1902.png";
  }


  if (Var == 'MSLP') {
    FileName = "https://raw.githubusercontent.com/MethaneRain/Weather-Jupyter-Notebooks/master/Thredds-Model-Notebooks/Sample-Maps/HL_Thickness_Model_2019_02_19_06Z.png";
  }

  var sourceOfPicture = FileName

  var img = document.getElementById(Var)
  img.src = sourceOfPicture.replace('503x304', '1515x912');
  img.style.display = "block";
}


</script>

</body>
</html>
