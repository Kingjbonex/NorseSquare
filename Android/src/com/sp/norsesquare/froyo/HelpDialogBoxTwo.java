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

public class HelpDialogBoxTwo extends DialogFragment {
//	ListView listView;
	
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
		
		context = getActivity();
				
		helpView = (View) inflater.inflate(R.layout.help_dialog_two, null);
		
		helpText = (TextView) helpView.findViewById(R.id.helpTextViewTwo);
		
		helpText.setMovementMethod(new ScrollingMovementMethod());
		
//		ArrayAdapter<String> adapter = new ArrayAdapter<String>(getActivity(), R.layout.list_view_row, R.id.listText, listCont);               
//		
//		listView.setAdapter(adapter);
//		
//		listView.setOnItemClic
		
		builder.setView(helpView);
		builder.setTitle("HELP: MENU");
		
//		eventList = (ListView) v.findViewById()
	
		return builder.create();
//		return super.onCreateDialog(savedInstanceState);
	}
}
