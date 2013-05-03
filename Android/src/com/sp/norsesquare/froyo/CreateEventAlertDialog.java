package com.sp.norsesquare.froyo;

import android.app.AlertDialog;
import android.app.Dialog;
import android.content.DialogInterface;
import android.os.Bundle;
import android.support.v4.app.DialogFragment;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.DatePicker;
import android.widget.EditText;
import android.widget.Spinner;

public class CreateEventAlertDialog extends DialogFragment
{
    //Dialog to allow the user to dynamically create new events to be shared with their friends
	public EditText eventName;
	public EditText eventDescription;
	public DatePicker eventDate;
	public Spinner location;
	
	
	public Dialog onCreateDialog(Bundle savedInstanceState)
	{
		
		//Create Activity
		AlertDialog.Builder builder = new AlertDialog.Builder(getActivity());
		LayoutInflater inflater = getActivity().getLayoutInflater();
		//NorseSquare ns = (NorseSquare) this.getActivity();
	    final View v = inflater.inflate(R.layout.create_event_dialog, null);
	    
		builder.setView(v);
		builder.setTitle(R.string.title_create_event);
		
		eventName = (EditText) v.findViewById(R.id.eventName);
		eventDescription = (EditText) v.findViewById(R.id.eventDescription);
		eventDate = (DatePicker) v.findViewById(R.id.eventDatePicker);
		
		final String dateString = (String.valueOf(eventDate.getMonth())) + "/" +  (String.valueOf(eventDate.getDayOfMonth())) + "/" + (String.valueOf(eventDate.getYear()));
 		
		builder
        .setPositiveButton("Create Event", new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int id) {
            	((NorseSquare) getActivity()).doPositiveClick(eventName.getText().toString(),eventDescription.getText().toString(),dateString);
            }
        })
        .setNegativeButton("Cancel", new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int id) {
                
            }
        });
		
		
		return builder.create();
	}
}
