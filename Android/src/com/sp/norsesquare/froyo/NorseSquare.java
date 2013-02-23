package com.sp.norsesquare.froyo;


import java.util.List;

import android.content.Context;
import android.content.Intent;
import android.graphics.drawable.Drawable;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.location.LocationProvider;
import android.net.Uri;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;

import com.google.android.maps.GeoPoint;
import com.google.android.maps.MapActivity;
import com.google.android.maps.MapController;
import com.google.android.maps.MapView;
import com.google.android.maps.Overlay;
import com.google.android.maps.OverlayItem;
import com.parse.Parse;
import com.parse.ParseException;
import com.parse.ParseObject;
import com.parse.PushService;

public class NorseSquare extends MapActivity {
    LocationProvider wifiProvider;
    LocationProvider gpsProvider;
    String currentLatLong;
    LocationManager locationManager;
    MapController mapController;
    OverlayList itemizedoverlay;
    List<Overlay> mapOverlays;
    
    /* ----- Database Location Variables ---- */
    boolean releaseLocation = true; //TODO Initialize to false for greater security

    
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_norse_square);
        
        Parse.initialize(this, "tiOO8Xjx8mTRHHC01DcgxswW27AglPBESjO1PhD6", "4pmiNQTxwipEFLkjrPv2zJFyJS8GlEVYPOhGzCjH"); 
        
        //Get location manager reference to enable all further locating
        
        LocationManager locationManager = (LocationManager) this.getSystemService(Context.LOCATION_SERVICE);
        
        //Get WiFi provider
        wifiProvider = locationManager.getProvider(LocationManager.NETWORK_PROVIDER);
        //Get GPS provider
        gpsProvider = locationManager.getProvider(LocationManager.GPS_PROVIDER);
        //Can also use Criteria class to pick a provider based on certain criteria
        
        MapView mapView = (MapView) findViewById(R.id.mapview);
        mapView.setBuiltInZoomControls(true);
        
        mapOverlays = mapView.getOverlays();
        Drawable drawable = this.getResources().getDrawable(R.drawable.push_pin);
        itemizedoverlay = new OverlayList(drawable, this);
        
        
      
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.activity_norse_square, menu);
        return true;
    }
    
    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle item selection
        switch (item.getItemId()) 
        {
            case R.id.menu_settings_reveal_location:
                if (item.isChecked())
                {
                	setReleaseLocation(false);
                	item.setChecked(false);
                }
                else
                {
                	setReleaseLocation(true);
                	item.setChecked(true);
                }
                return true;
            default:
                return super.onOptionsItemSelected(item);
        }
    }
    
    public void setReleaseLocation(boolean b)
    {
    	releaseLocation = b;
    }
    
    
    public void onStart()
    {
    	super.onStart();
    	
    	// Reobtain location manager at restart of activity
    	locationManager = (LocationManager) this.getSystemService(Context.LOCATION_SERVICE);
    	final boolean wifiEnabled = locationManager.isProviderEnabled(LocationManager.NETWORK_PROVIDER);
    	final boolean gpsEnabled = locationManager.isProviderEnabled(LocationManager.GPS_PROVIDER);
    	
    	
    	if (!wifiEnabled)
    	{
    		//put alert box here, for now exit
    		//System.exit(0);
    	}
    	
    	if (!gpsEnabled)
    	{
    		//put alert box here, for now exit
    		//System.exit(0);
    	}
    	


     
    	try 
    	{
			locateMeCoarse((MapView)findViewById(R.id.mapview));
		} 
    	catch (ParseException e) 
    	{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}   //Initialize app to current wifi location  

    }
    
    
    //Below are all top level methods called by this app
    public void locateMeCoarse(View view) throws ParseException
    {
    	mapController = ((MapView) view).getController();
    	
    	Location coarseLocation;
    	//Get GPS coordinates, pass to Google Maps
    	
    	locationManager.requestLocationUpdates(LocationManager.NETWORK_PROVIDER, 5000, 25, locationListener);
    	coarseLocation = locationManager.getLastKnownLocation(LocationManager.NETWORK_PROVIDER);
    	
    	//currentLatLong = "geo:" +  coarseLocation.getLatitude() + "," + coarseLocation.getLongitude() + "?z=15"

    	Integer latInt = ((Double)coarseLocation.getLatitude()).intValue();
    	Integer longitudeInt = ((Double)coarseLocation.getLongitude()).intValue();
    	Integer lat = (int) (latInt * 1E6);
    	Integer longitude = (int) (longitudeInt * 1E6);
    	
    	GeoPoint geo = new GeoPoint(latInt,longitudeInt);

    	/*
		if (currentLatLong.equals(null))
		{
			System.out.println("Longitude and latitude are null ");
		}
    	*/
    	//Uri coarseURI = Uri.parse(currentLatLong);    //Parse latitude and longitude
    	
    	//Intent wifiIntent = new Intent(Intent.ACTION_VIEW,coarseURI);
    	//startActivity(wifiIntent); 
    	//mapController.animateTo(geo);
      
    	//LatLongAlert alert = new LatLongAlert(this);
    	
    	
    	String message = ("Latitude = " + (Integer)(geo.getLatitudeE6())).toString() + "\n" + "Longitude = " + ((Integer)((geo.getLongitudeE6()))).toString();
    	OverlayItem overlayitem = new OverlayItem(geo, "My Current Location", message);
    	itemizedoverlay.addOverlay(overlayitem);
        mapOverlays.add(itemizedoverlay);  
    	/*
        if (releaseLocation)
        {
           //If user desires to release location, send to Parse database	
        	
        	ParseObject longObject = new ParseObject("LocationObject");
            longObject.put("myLong", geo.getLongitudeE6());
            ParseObject latObject = new ParseObject("LocationObject");
            latObject.put("myLat", (geo.getLatitudeE6()));
            
            longObject.save();
            latObject.save();
        }
         //Build and send Parseobject
        */
        

    	
    	mapController.animateTo(geo);
    	
    	
    }
    
    public void locateMeCoarseListener(View view) throws ParseException
    {
    	locateMeCoarse(findViewById(R.id.mapview));     //Use listener methods that call others, avoid problems with specifications for button listeners
    }
    
    public void locateMeFine(View view)
    {
    	locationManager.requestLocationUpdates(LocationManager.GPS_PROVIDER, 10000, 10, locationListener);
    	Uri fineLocation = Uri.parse(currentLatLong);  
    	Intent gpsIntent = new Intent(Intent.ACTION_VIEW,fineLocation);
    }
    
    private final LocationListener locationListener = new LocationListener()
    {
    	public void onLocationChanged(Location location)
    	{
    		//Where does this go? How can it be used?
    		currentLatLong = "geo:" +  location.getLatitude() + "," + location.getLongitude() + "?z=15";
    		
    		if (currentLatLong.equals(null))
    		{
    			System.out.println("Longitude and latitude are null");
    		}
    		///System.out.println("Location object is:");
    		//System.out.println(location);
    	}

		public void onProviderDisabled(String provider) {
			// TODO Auto-generated method stub
			
		}

		public void onProviderEnabled(String provider) {
			// TODO Auto-generated method stub
			
		}

		public void onStatusChanged(String provider, int status, Bundle extras) {
			// TODO Auto-generated method stub
			
		}
    };

	@Override
	protected boolean isRouteDisplayed() {
		// TODO Auto-generated method stub
		return false;
	}
    

}
