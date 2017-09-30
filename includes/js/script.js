/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/

      function validate()
      {
      
         if( document.myForm.inputName.value == "" )
         {
            alert( "Please provide your name!" );
            document.myForm.inputName.focus() ;
            return false;
         }
         else
         {
            var nam = document.myForm.inputName.value;
            var chk = /^[A-Za-z]/;
            if (!chk.test(nam))
            {
               alert("Please enter correct Name")
               document.myForm.inputName.focus() ;
               return false;      
            }
         }
         

         if( document.myForm.inputEmail.value == "" )
         {
            alert( "Please provide your Email!" );
            document.myForm.inputEmail.focus() ;
            return false;
         }
         else
         {
            var emailID = document.myForm.inputEmail.value;
            atpos = emailID.indexOf("@");
            dotpos = emailID.lastIndexOf(".");
         
            if (atpos < 1 || ( dotpos - atpos < 2 )) 
            {
               alert("Please enter correct email ID")
               document.myForm.inputEmail.focus() ;
               return false;
            }
         }
         

         if( document.myForm.inputZipcode.value == "" ||
         isNaN( document.myForm.inputZipcode.value ) ||
         document.myForm.inputZipcode.value.length != 5 )
         {
            alert( "Please provide a zip in the format #####." );
            document.myForm.inputZipcode.focus() ;
            return false;
         }
         
         if( document.myForm.Country.value == "-1" )
         {
            alert( "Please provide your country!" );
            return false;
         }
         return( true );
      }