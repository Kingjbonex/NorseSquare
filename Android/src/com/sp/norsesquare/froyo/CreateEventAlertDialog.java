package com.sp.norsesquare.froyo;

import android.app.AlertDialog;
import android.app.Dialog;
import android.content.Context;
import android.content.DialogInterface;
import android.os.Bundle;
import android.view.LayoutInflater;

public class CreateEventAlertDialog extends AlertDialog
{
    //Dialog to allow the user to dynamically create new events to be shared with their friends
	
	public CreateEventAlertDialog(Context context)
	{
		super(context);
		// TODO Auto-generated constructor stub
	}
	
	public Dialog onCreateDialog(Bundle savedInstanceState)
	{
		//Create Activity
		AlertDialog.Builder builder = new AlertDialog.Builder(getOwnerActivity());
		LayoutInflater inflater = getOwnerActivity().getLayoutInflater();
		
//		builder.setView(inflater.inflate(R.layout.create_event_dialog,null));
//		builder.setTitle(R.string.title_create_event);
		
		builder.setMessage("Only A Sith Deals in Absolutes")
        .setPositiveButton("You Are A Good Person", new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int id) {
                // FIRE ZE MISSILES!
            }
        })
        .setNegativeButton("You Are A Coward", new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int id) {
                // User cancelled the dialog
            }
        });
		
		
		return builder.create();
	}
}
