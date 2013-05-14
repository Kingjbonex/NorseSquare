package com.sp.norsesquare.froyo;

import android.app.AlertDialog;
import android.app.Dialog;
import android.content.Context;
import android.content.DialogInterface;
import android.os.Bundle;
import android.support.v4.app.DialogFragment;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.EditText;

public class AddFriendsAlertDialog extends DialogFragment
{


		//Dialog to allow the user to dynamically create new events to be shared with their friends, then redrawn on map fragment.
	
		public EditText friendName;
		public EditText friendEmail;
		
		
		public Dialog onCreateDialog(Bundle savedInstanceState)
		{
			
			//Create Activity
			AlertDialog.Builder builder = new AlertDialog.Builder(getActivity());
			LayoutInflater inflater = getActivity().getLayoutInflater();
			//NorseSquare ns = (NorseSquare) this.getActivity();
//		    final View v = inflater.inflate(R.layout.add_friend_alert, null);
		    
//			builder.setView(v);
			builder.setTitle(R.string.title_add_friend);
			
//			friendName = (EditText) v.findViewById(R.id.friendName);
//			friendEmail = (EditText) v.findViewById(R.id.friendEmail);
			
			
			builder
	        .setPositiveButton("Create Event", new DialogInterface.OnClickListener() {
	            public void onClick(DialogInterface dialog, int id) {
//	            	((NorseSquare) getActivity()).addFriend(friendName.getText().toString(),friendEmail.getText().toString());
	            }
	        })
	        .setNegativeButton("Cancel", new DialogInterface.OnClickListener() {
	            public void onClick(DialogInterface dialog, int id) {
	                
	            }
	        });
			
			
			return builder.create();
		}
	

	
	
}
