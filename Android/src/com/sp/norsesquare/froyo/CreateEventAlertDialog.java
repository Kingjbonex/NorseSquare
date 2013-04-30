package com.sp.norsesquare.froyo;

import android.app.AlertDialog;
import android.app.Dialog;
import android.content.Context;
import android.content.DialogInterface;
import android.os.Bundle;
import android.support.v4.app.DialogFragment;
import android.support.v4.app.FragmentActivity;
import android.view.LayoutInflater;

public class CreateEventAlertDialog extends DialogFragment
{
    //Dialog to allow the user to dynamically create new events to be shared with their friends
	
	
	public Dialog onCreateDialog(Bundle savedInstanceState)
	{
		//Create Activity
		AlertDialog.Builder builder = new AlertDialog.Builder(getActivity());
		LayoutInflater inflater = getActivity().getLayoutInflater();
		NorseSquare ns = this.getActivity();
		
		builder.setView(inflater.inflate(R.layout.create_event_dialog,null));
		builder.setTitle(R.string.title_create_event);
		
		builder
        .setPositiveButton("Create Event", new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int id) {
               n
            }
        })
        .setNegativeButton("Cancel", new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int id) {
                
            }
        });
		
		
		return builder.create();
	}
}
