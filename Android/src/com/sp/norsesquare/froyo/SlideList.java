package com.sp.norsesquare.froyo;


import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemClickListener;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;

import com.actionbarsherlock.app.SherlockListFragment;
import com.slidingmenu.lib.SlidingMenu;
//import com.actionbarsherlock.view.*;

public class SlideList extends SherlockListFragment {
	
	private final String TAG = "Sliding Menu Fragment";
	
	NorseSquare ns;
	
	ListView listView;
	
	String[] listCont;
	
	Context context;
	
	Activity mainact = ((NorseSquare) getActivity());
	
	public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
		listView  = (ListView) inflater.inflate(R.layout.list, container, false);
		
		return listView;
	}
	
	@Override
	public void onActivityCreated(Bundle savedInstanceState) {
		super.onActivityCreated(savedInstanceState);
		context = getActivity();
		
		listCont = context.getResources().getStringArray(R.array.slidingMenuContents);
		
		//for args 2 and 3 of this arrayadapter -- R.layout.list_view_row, R.id.listText
		ArrayAdapter<String> adapter = new ArrayAdapter<String>(getActivity(),  R.layout.list_view_row, R.id.listText, listCont);
		
		listView.setAdapter(adapter);
		
		listView.setOnItemClickListener(new ListClickHandler());
		
		//Get main NS activity for use in calling other methods
		ns = (NorseSquare) this.getActivity();
		
		
		
		
	}
	private class ListClickHandler implements OnItemClickListener
	{

		@Override
		public void onItemClick(AdapterView<?> adapter, View view, int position, long arg3) 
		{
			TextView listText = (TextView) view.findViewById(R.id.listText);
			Intent intent;
			String text = listText.getText().toString();
			ns.myToggle();
			
//			Toast.makeText(context, text + " @ position "+ position, Toast.LENGTH_SHORT).show();
			switch (position)
			{
			case 0:
				//CHECK IN
				Log.i(TAG, text + " Clicked");
				wifiLocate(ns.findViewById(R.id.main_map));
				ns.findAll(ns.findViewById(R.id.main_map));
//				ns.checkInClicked(ns.findViewById(R.id.main_map));
				Log.i(TAG, view.toString());
				//make menu close
				
				break;
			
			case 1:
				//CREATE EVENT
				Log.i(TAG,text + " Clicked");
				ns.createEvent(ns.findViewById(R.id.main_map));
				break;
				
			case 2:
				//VIEW EVENTS
				Log.i(TAG,text + " Clicked");
				ns.showEventList(ns.findViewById(R.id.main_map));
				break;
				
			case 3:
				//HELP
				break;
			case 4:
				//EXIT
				ns.finish();
				break;
			default:
				Log.i(TAG, "SOMETHING ELSE WAS CLICKED WTF");
			}
		}
		
	}
	
	public void wifiLocate(View view)
	{
		//Call method from main activity
	    ns.wifiLocate(view);
	}

}
