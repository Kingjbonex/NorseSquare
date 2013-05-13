package com.sp.norsesquare.froyo;

import java.util.ArrayList;
import java.util.List;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.protocol.HTTP;
import org.apache.http.util.EntityUtils;

import android.database.CursorJoiner.Result;
import android.os.AsyncTask;
import android.util.Log;
import android.view.View;


/*Class to allow for backround database calls to be made in alternate threads */
public class LoginDatabaseTask extends AsyncTask<String, Void, String>
{
	
	
	String fname;
	String lname;
	String email;
	String gid;

	public LoginDatabaseTask(String string, String string2, String lutherAccount, String gid) {
		// TODO Auto-generated constructor stub
		this.fname = string;
		this.lname = string2;
		this.email = lutherAccount;
		this.gid = gid;
		
	}

	/**
	 * @param args
	 */
	//Be sure that the parameters for the AsyncTask fit in with the appropriate methods, see AsyncTask reference. EG. 
	protected void onPreExecute(){
		Log.i("BEGIN","trying to checkin");
	}
	
	@Override
	protected String doInBackground(String... args)
	{
		// TODO Add database calls, differentiation.
	    	try {
	            HttpClient client = new DefaultHttpClient();  
	            String postURL = "http://norsesquare.luther.edu/services/login.php";
	            postURL += "?&fname="+this.fname+"&lname="+lname+"&email="+this.email+"&gid="+this.gid;
	            HttpGet get = new HttpGet(postURL); 
	            HttpResponse responseGet = client.execute(get);
	            HttpEntity resentity = responseGet.getEntity();
	            if (resentity != null) {    
	               // Log.i("RESPONSE",EntityUtils.toString(resentity));
	                Log.i("DEBUG","Debugging,am i there??");
	                return EntityUtils.toString(resentity);
	            }
            else{Log.i("wft", "i dont know what the fuck is oging on");}
	           
	            
	        } catch (Exception e) {
	            e.printStackTrace();
	            Log.i("msg","begone vile magicks");
	          }
	    	
	    return null;
	
	}
	
	protected void onProgressUpdate(Integer... progress){
		Log.i("PROGRESS","Getting somewhere");
		}
	
	protected void onPostExecute(Long result) {
        Log.i("Yes", "gems are truly outrageous..");
        //showDialog("Received info from Database");
    }
	
	

}
