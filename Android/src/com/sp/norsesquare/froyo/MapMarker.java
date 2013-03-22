package com.sp.norsesquare.froyo;

import com.google.android.gms.maps.model.*;

public class MapMarker
{
	LatLng latlong;
	String title;
	String snippet;
	
	public MapMarker(LatLng ll,String t,String s)
	{
		latlong = ll;
		title = t;
		snippet = s;
	}
	
	public void setLatLong(LatLng ll)
	{
		latlong = ll;
	}
	
	public void setTitle(String t)
	{
		title = t;
	}
	
	public void setSnippet(String s)
	{
		snippet = s;
	}
	
	
	//Getters
	public LatLng getLatLong()
	{
		return latlong;
	}
	
	public String getTitle()
	{
		return title;
	}
	
	public String getSnippet()
	{
		return snippet;
	}
	
	//Method to create and return Marker object for easy addition to GoogleMap. Just call this method from the MapMarker object
	//E.G. googlemap.addMarker(mapmarker.getMarkerOptions());
	
	public MarkerOptions getMarkerOptions()
	{
		return (new MarkerOptions()
		        .position(latlong)
		        .title(title)
		        .snippet(snippet));
	}
	
	

}
