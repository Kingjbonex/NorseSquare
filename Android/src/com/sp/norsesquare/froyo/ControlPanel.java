package com.sp.norsesquare.froyo;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.GestureDetector;
import android.view.GestureDetector.OnGestureListener;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.widget.EditText;
import android.widget.ListAdapter;
import android.widget.Toast;
import static android.view.View.*;

/*UI interface class to allow user interaction with critical map functions. Will be able to be hidden on offscreen swipe */


public class ControlPanel extends Fragment implements OnGestureListener
{
	//Main Activity references
	NorseSquare ns;

	private GestureDetector gestureScanner;
	private boolean visible = true;

	ListAdapter la;
	//Sample list of data to fill List View in CP
	String[] sampleArray = new String[3];
	
	
	
	public void onCreate(Bundle savedInstanceState) 
	{
		
		//Set up fragment, set content from layout file
		super.onCreate(savedInstanceState);
		
		/*  TODO - Add in later, dynamically create options. http://developer.android.com/guide/topics/ui/layout/listview.html
		//Add information to List View
        sampleArray[0] = "Hello";
        sampleArray[1] = "Lamborghini";
        sampleArray[2] = "Jeremy Clarkson";
        
        */
		//Get reference to main activity, allows for calling main geolocation methods.
		//TODO - Implications on threading performance
		ns = (NorseSquare) this.getActivity();
		gestureScanner = new GestureDetector(this);
		
	}
	
	public View onCreateView(LayoutInflater inflater, ViewGroup container, 
	        Bundle savedInstanceState) 
	{
	        // Inflate the layout for this fragment. Specify custom layouts for different fragments from new XML files, just like a normal activity
	        return inflater.inflate(R.layout.control_panel, container, false);
	}
	
	public void onStart(Bundle savedInstanceState)
	{
		super.onStart();
		
		//Reobtain reference to main activity after reloading. 
		//TODO - Efficiency? Necessary?
		ns = (NorseSquare) this.getActivity();
	}
	

	
	public void wifiLocate()
	{
		//Call method from main activity
	    ns.wifiLocate(this.getView());
	}
	
	
	/*joel is fiddling with these methods.*/
//	this isn't necessary anymore - since the control panel .xml file calls the norsesquare.java
//	public void popUp()
//	{
//		//pops up toast full of text from textbox.
////		EditText text = (EditText)findViewById(R.id.text_box);
////		String value = text.getText().toString();
////		ns.popUp(this.getView());s
//	}

	/*Methods for gesture detection*/
	

	@Override
	public boolean onDown(MotionEvent arg0)
	{
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean onFling(MotionEvent arg0, MotionEvent arg1, float arg2,
			float arg3)
	{
		if (visible==true)
		{
			visible = false;
			this.getView().setVisibility(INVISIBLE);
		}
		else
		{
			visible = true;
			this.getView().setVisibility(VISIBLE);
		}
		return true;
	}

	@Override
	public void onLongPress(MotionEvent arg0)
	{
		// TODO Auto-generated method stub
		
	}

	@Override
	public boolean onScroll(MotionEvent arg0, MotionEvent arg1, float arg2,
			float arg3)
	{
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public void onShowPress(MotionEvent arg0)
	{
		// TODO Auto-generated method stub
		
	}

	@Override
	public boolean onSingleTapUp(MotionEvent arg0)
	{
		// TODO Auto-generated method stub
		return false;
	}

}
