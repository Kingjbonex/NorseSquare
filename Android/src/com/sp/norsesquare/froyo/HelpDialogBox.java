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

public class HelpDialogBox extends DialogFragment {
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
		
//		grab the current context
		context = getActivity();
				
//		inflate the view.
		helpView = (View) inflater.inflate(R.layout.help_dialog_one, null);
		
//		get the view
		helpText = (TextView) helpView.findViewById(R.id.helpTextView);
		
//		set up the scrolling.
		helpText.setMovementMethod(new ScrollingMovementMethod());
		
//		Show the view with the builder
		builder.setView(helpView);
		builder.setTitle("HELP: CHECK IN");
		

//		
		return builder.create();
	}
}
