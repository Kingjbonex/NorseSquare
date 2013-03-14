package com.sp.norsesquare.froyo;

import android.content.Context;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.os.Bundle;
import android.support.v4.app.FragmentActivity;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.Toast;

import com.google.android.gms.maps.CameraUpdate;
import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.CameraPosition;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.LatLngBounds;
import com.google.android.gms.maps.model.MarkerOptions;


/**
 * This shows how to create a simple activity with a map and a marker on the map.
 * <p>
 * Notice how we deal with the possibility that the Google Play services APK is not
 * installed/enabled/updated on a user's device.
 */

public class NorseSquare extends FragmentActivity 
{
    /**
     * Note that this may be null if the Google Play services APK is not available.
     */
    private GoogleMap mMap;
    private CameraUpdate cUpdate;
    boolean releaseLocation;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.layout_relative_map);
        
        
        
        setUpMapIfNeeded();
        Toast.makeText(this, "Map has been set up.", Toast.LENGTH_SHORT).show();
    }

    @Override
    protected void onResume() {
        super.onResume();
        setUpMapIfNeeded();
    }
    /*
    @Override
    public void onCreateOptionsMenu (Menu menu, MenuInflater inflater) 
    {
        inflater.inflate(R.menu.menu_main_settings, menu);
        super.onCreateOptionsMenu(menu, inflater);
    } */
    
    @Override
    public boolean onPrepareOptionsMenu(Menu menu)
    {
    	getMenuInflater().inflate(R.menu.menu_main_settings, menu);
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
            case R.id.menu_settings_david_duba:
            {
            	if (item.isChecked())
            	{
            		Toast toast = Toast.makeText(this, "Hi Duba!!!", Toast.LENGTH_LONG);
            		toast.show();
            	}
            }
            default:
                return super.onOptionsItemSelected(item);
        }
    }
    
    public void setReleaseLocation(boolean b)
    {
    	releaseLocation = b;
    }

    /**
     * Sets up the map if it is possible to do so (i.e., the Google Play services APK is correctly
     * installed) and the map has not already been instantiated.. This will ensure that we only ever
     * call {@link #setUpMap()} once when {@link #mMap} is not null.
     * <p>
     * If it isn't installed {@link SupportMapFragment} (and
     * {@link com.google.android.gms.maps.MapView
     * MapView}) will show a prompt for the user to install/update the Google Play services APK on
     * their device.
     * <p>
     * A user can return to this Activity after following the prompt and correctly
     * installing/updating/enabling the Google Play services. Since the Activity may not have been
     * completely destroyed during this process (it is likely that it would only be stopped or
     * paused), {@link #onCreate(Bundle)} may not be called again so we should call this method in
     * {@link #onResume()} to guarantee that it will be called.
     */
    private void setUpMapIfNeeded() {
        // Do a null check to confirm that we have not already instantiated the map.
        if (mMap == null) {
            // Try to obtain the map from the SupportMapFragment.
            mMap = ((SupportMapFragment) getSupportFragmentManager().findFragmentById(R.id.main_map))
                    .getMap();
            //Set onCameraChangeListener to allow for boundaries to be used after "layout"(?)
            mMap.setOnCameraChangeListener(new GoogleMap.OnCameraChangeListener()
			{
				
				@Override
				public void onCameraChange(CameraPosition arg0)
				{
					 /*Code for limiting map to Decorah area */
					//TODO - Don't recalculate every time, only calculate decorah bounds after layout
					LatLng boundSW = new LatLng(43.282454,-91.827679);
			        LatLng boundNE = new LatLng(43.309191,-91.766739);
			        
			        LatLngBounds.Builder builder = new LatLngBounds.Builder();
			        builder.include(boundSW);
			        builder.include(boundNE);
			        
			        LatLngBounds decorahBound = new LatLngBounds(boundSW,boundNE);
			   
			        cUpdate = CameraUpdateFactory.newLatLngBounds(decorahBound, 5);
					
					mMap.moveCamera(CameraUpdateFactory.newLatLngBounds(builder.build(), 5));
	                mMap.setOnCameraChangeListener(null);
					
				}
			});
            
         }
            
            setUpMap();
         // Check if we were successful in obtaining the map.
         if (mMap != null) 
         {
               setUpMap();
         } 
        
    }

    /**
     * This is where we can add markers or lines, add listeners or move the camera. In this case, we
     * just add a marker near Africa.
     * <p>
     * This should only be called once and when we are sure that {@link #mMap} is not null.
     */
    private void setUpMap() 
    {
       
    }
    
    /*Points with which to limit view of map:
     Southwest: Lat - 43.282454  Long - -91.827679
     Northeast: Lat - 43.309191  Long - -91.766739
     */
    
}
