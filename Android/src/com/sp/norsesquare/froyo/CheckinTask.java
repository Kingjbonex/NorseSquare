package com.sp.norsesquare.froyo;

import java.util.ArrayList;
import java.util.List;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
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
public class CheckinTask extends AsyncTask<String, Void, Integer>
{
	
	
	String lat;
	String lon;
	String email;

	public CheckinTask(String string, String string2, String lutherAccount) {
		// TODO Auto-generated constructor stub
		lat = string;
		lon = string2;
		email = lutherAccount;
		
	}

	/**
	 * @param args
	 */
	//Be sure that the parameters for the AsyncTask fit in with the appropriate methods, see AsyncTask reference. EG. 
	protected void onPreExecute(){
		Log.i("BEGIN","trying to checkin");
	}
	
	@Override
	protected Integer doInBackground(String... args)
	{
		// TODO Add database calls, differentiation.
	    	try {
	            HttpClient client = new DefaultHttpClient();  
	            String postURL = "http://norsesquare.luther.edu/services/checkIn.php";
	            HttpPost post = new HttpPost(postURL); 
	            List<NameValuePair> params = new ArrayList<NameValuePair>();
	            params.add(new BasicNameValuePair("lat", lat));
	            params.add(new BasicNameValuePair("long", lon));
	            params.add(new BasicNameValuePair("email", email));
	            UrlEncodedFormEntity ent = new UrlEncodedFormEntity(params,HTTP.UTF_8);
	            post.setEntity(ent);
	            HttpResponse responsePOST = client.execute(post);  
	            HttpEntity resentity = responsePOST.getEntity();  
	            if (resentity != null) {    
		                Log.i("RESPONSE",EntityUtils.toString(resentity));
		                Log.i("DEBUG","Debugging, are you there??");
		     
		            }
	            else{Log.i("wft", "i dont know what the fuck is oging on");}
	            
	        } catch (Exception e) {
	            e.printStackTrace();
	            Log.i("msg","begone vile magicks");
	          }
	    	
	    return 1;
	
	}
	
	protected void onProgressUpdate(Integer... progress){
		Log.i("PROGRESS","Getting somewhere");
		}
	
	protected void onPostExecute(Long result) {
        Log.i("Yes", "gems are truly outrageous..");
        //showDialog("Received info from Database");
    }
	
	

}
