package com.sp.norsesquare.froyo;

import android.database.CursorJoiner.Result;
import android.os.AsyncTask;


/*Class to allow for backround database calls to be made in alternate threads */
public class DatabaseTask extends AsyncTask<String, Void, Integer>
{

	/**
	 * @param args
	 */
	//Be sure that the parameters for the AsyncTask fit in with the appropriate methods, see AsyncTask reference. EG. 
	
	public static void main(String[] args)
	{
		// TODO Auto-generated method stub

	}

	@Override
	protected Integer doInBackground(String... args)
	{
		// TODO Add database calls, differentiation. 
		return 1;
	
	}

}
