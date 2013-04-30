package com.sp.norsesquare.froyo;


import com.google.android.gms.maps.model.BitmapDescriptorFactory;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.MarkerOptions;

public class EventMarker extends MapMarker
{
	
	
   public EventMarker(LatLng ll,String t,String s)
   {
	   super(ll,t,s);
   }
   
   @Override
   public MarkerOptions getMarkerOptions()
   {
	   return (new MarkerOptions()
       .position(latlong)
       .title(title)
       .snippet(snippet)
       .icon(BitmapDescriptorFactory.defaultMarker(BitmapDescriptorFactory.HUE_GREEN))
       );
   }
}
