package com.sp.norsesquare.froyo;

import android.app.AlertDialog;
import android.app.Dialog;
import android.content.Context;
import android.os.Bundle;
import android.support.v4.app.DialogFragment;
import android.view.LayoutInflater;
import android.widget.ArrayAdapter;
import android.widget.ListView;

public class CreateEventListView extends DialogFragment 
{
	
	ListView listView;
	
	String[] listCont;
	
	Context context;

	@Override
	public Dialog onCreateDialog(Bundle savedInstanceState) 
	{
		//Create Activity
		AlertDialog.Builder builder = new AlertDialog.Builder(getActivity());
		LayoutInflater inflater = getActivity().getLayoutInflater();
		
		context = getActivity();
		
		listCont = context.getResources().getStringArray(R.array.dumbyListContents);
		
		listView = (ListView) inflater.inflate(R.layout.list, null);
		
		ArrayAdapter<String> adapter = new ArrayAdapter<String>(getActivity(), R.layout.list_view_row, R.id.listText, listCont);               
		
		listView.setAdapter(adapter);
		
//		listView.setOnItemClick
		
		builder.setView(listView);
		builder.setTitle("SHIEEEETTT & Events");
		
//		eventList = (ListView) v.findViewById()
		
		
		
		
		
		
		
		return builder.create();
//		return super.onCreateDialog(savedInstanceState);
	}

}
