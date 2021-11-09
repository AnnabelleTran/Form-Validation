function validation()
{
	var fname=document.registration.fname;
	var lname=document.registration.lname;
	var gender=document.registration.gender;
	var num=document.registration.num;

	if(allLettername(fname))
	{
		if(allLetterlast(lname))
		{
			if(genderselect(gender))
			{
				if(Mobile(num))
					{
					}
			}
		}
	}
	return false;
}	

function allLettername(fname)
{ 
	var letters = /^[A-Za-z]+$/;
	if(fname.value.length==0)
	{
		alert('Please enter first name');
		fname.focus();
		return false;
	}

	else if(fname.value.match(letters))
	{
		return true;
		
	}
	else
	{
		alert('First name must have alphabet characters only');
		fname.focus();
		return false;
	}
}

function allLetterlast(lname)
{ 
	var letters = /^[A-Za-z]+$/;
	if(lname.value.length==0)
	{
		alert('Please enter last name');
		fname.focus();
		return false;
	}
	else if(lname.value.match(letters))
	{
		return true;
		
	}
	else
	{
		alert('last name must have alphabet characters only');
		fname.focus();
		return false;
		
	}
}

function genderselect(gender)
{
	if(gender.value == "Gender")
	{
		alert('Select your gender');
		gender.focus();
		return false;
	}
	else
	{
		return true;
	}
}

function Mobile(num)
{ 
	var numbers = /^[0-9]+$/;
	if(num.value.length==0 )
	{
		alert('Please enter contact number');
		fname.focus();
		return false;
	}
	else if(num.value.length>10)
	{
		alert('Please enter a valid contact number');
		fname.focus();
		return false;

	}
	else if(num.value.match(numbers))
	{
		alert('Form Successfully Submitted');
		window.location.reload();
		return true;
	}
	else
	{
		alert('Please check your contact number');
		return false;
	}
}
