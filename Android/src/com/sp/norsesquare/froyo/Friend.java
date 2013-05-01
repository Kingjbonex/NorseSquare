package com.sp.norsesquare.froyo;

public class Friend
{
	
	String name;
	String email;
	Integer UID;
	boolean hasAcceptedInvite;  //Boolean to indicate whether or not this Friend has accepted my friend request

	public Friend(String n, String e,Integer u)
	{
		name = n;
		email = e;
		UID = u;
	}
	
	public String getName()
	{
		return name;
	}
	
	public String getEmail()
	{
		return email;
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
