package com.sp.norsesquare.froyo;

import android.app.AlertDialog;
import android.app.Dialog;
import android.content.Context;
import android.os.Bundle;
import android.support.v4.app.DialogFragment;
import android.text.method.ScrollingMovementMethod;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.TextView;

public class AboutDialogBox extends DialogFragment {
//	Dialog box used to show basic app version and contact information. Info is hardcoded, should be relative to manifest settings at some point.
	
	View helpView;
	
	TextView helpText;
	
	String[] listCont;
	
	Context context;

	@Override
	public Dialog onCreateDialog(Bundle savedInstanceState) 
	{
		//Create Activity
		AlertDialog.Builder builder = new AlertDialog.Builder(getActivity());
		LayoutInflater inflater = getActivity().getLayoutInflater();
		
		String bodyText = "Developed by: Tim, David, Joel, Zack" + "\n" + "\n" + "Affiliated with: Luther College" + "\n" + "Version: 2.0" + "\n" + "Version Date: 05/01/2013";
		
		context = getActivity();
				
		helpView = (View) inflater.inflate(R.layout.about_dialog, null);
		
		helpText = (TextView) helpView.findViewById(R.id.aboutTextView);
		
		helpText.setMovementMethod(new ScrollingMovementMethod());
		helpText.setText(bodyText);
		
//		ArrayAdapter<String> adapter = new ArrayAdapter<String>(getActivity(), R.layout.list_view_row, R.id.listText, listCont);               
//		
//		listView.setAdapter(adapter);
//		
//		listView.setOnItemClick
		
		builder.setView(helpView);
		builder.setTitle("ABOUT NORSESQUARE");
		
//		eventList = (ListView) v.findViewById()
	
		return builder.create();
//		return super.onCreateDialog(savedInstanceState);
	}
}
