package com.sp.norsesquare.froyo;

// this is a fragment that displays about information

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
	//the fragment's view
	View helpView;
	
	//information text
	TextView helpText;
	
	
	String[] listCont;
	
	//initializing a context
	Context context;

	
	@Override
	public Dialog onCreateDialog(Bundle savedInstanceState) 
	{
		//Create Activity
		AlertDialog.Builder builder = new AlertDialog.Builder(getActivity());
		LayoutInflater inflater = getActivity().getLayoutInflater();
		
		//actual text to be displayed
		String bodyText = "Developed by: Tim, David, Joel, Zack" + "\n" + "\n" + "Affiliated with: Luther College" + "\n" + "Version: 2.0" + "\n" + "Version Date: 05/01/2013";
		
		//grabbing the current context
		context = getActivity();
		
		//pops up the about_dialog
		helpView = (View) inflater.inflate(R.layout.about_dialog, null);
		
		//grabbing the textView for use later
		helpText = (TextView) helpView.findViewById(R.id.aboutTextView);
		
		//making it so that the text scrolls up and down. Also tetting the earlier bodyText to the TextView
		helpText.setMovementMethod(new ScrollingMovementMethod());
		helpText.setText(bodyText);
		
		//Make the builder show the dialog.
		builder.setView(helpView);
		builder.setTitle("ABOUT NORSESQUARE");
		
		return builder.create();

	}
}
