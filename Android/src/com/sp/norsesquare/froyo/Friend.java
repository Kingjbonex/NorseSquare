package com.sp.norsesquare.froyo;

import com.google.android.gms.maps.model.LatLng;

public class Friend
{
	
	String firstName;
	String lastName;
	String email;
	LatLng ll;
	Integer UID;
	String checkInTime;
	boolean hasAcceptedInvite;  //Boolean to indicate whether or not this Friend has accepted my friend request

	public Friend(String fn,String ln, String e,LatLng l,String cit)
	{
		//Default constructor to add local friends absent UID from server
		firstName = fn;
		lastName = ln;
		email = e;
		ll = l;
		checkInTime = cit;
		UID = 999;
		hasAcceptedInvite = false;
	}
	
	public Friend(String fn,String ln, String e,LatLng l,String cit, Integer u)
	{
		firstName = fn;
		lastName = ln;
		email = e;
		ll = l;
		checkInTime = cit;
		UID = u;
		hasAcceptedInvite = false;
		
	}
	
	public String getFirstName()
	{
		return firstName;
	}
	
	public String getLastName()
	{
		return lastName;
	}
	
	public String getFullName()
	{
		return firstName + " " + lastName;
	}
	
	public String getEmail()
	{
		return email;
	}
	
	public LatLng getLatLong()
	{
		return ll;
	}
	
	public String getCheckInTime()
	{
		return checkInTime;
	}
	
	public Integer getUID()
	{
		return UID;
	}
	
	public boolean hasAcceptedInvite()
	{
		return hasAcceptedInvite;
	}
	
	
}
