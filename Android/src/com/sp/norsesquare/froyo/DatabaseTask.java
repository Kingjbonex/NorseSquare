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


/*Class to allow for background database calls to be made in alternate threads */
public class DatabaseTask extends AsyncTask<String, Void, String>
{
	/**
	 * @param args
	 */
	//Be sure that the parameters for the AsyncTask fit in with the appropriate methods, see AsyncTask reference. EG. 
	protected void onPreExecute(){
		Log.i("BEGIN","Starting the connection");
	}
	
	@Override
	protected String doInBackground(String... args)
	{
		// TODO Add database calls, differentiation.
	    	try {
	            HttpClient client = new DefaultHttpClient();  
	            String postURL = "http://norsesquare.luther.edu/services/findAll.php";
	            HttpPost post = new HttpPost(postURL); 
	            List<NameValuePair> params = new ArrayList<NameValuePair>();
	            params.add(new BasicNameValuePair("user", "kris"));
	            params.add(new BasicNameValuePair("pass", "xyz"));
	            UrlEncodedFormEntity ent = new UrlEncodedFormEntity(params,HTTP.UTF_8);
	            post.setEntity(ent);
	            HttpResponse responsePOST = client.execute(post);  
	            HttpEntity resEntity = responsePOST.getEntity();  
	            if (resEntity != null) {    
	               // Log.i("RESPONSE",EntityUtils.toString(resEntity));
	                Log.i("DEBUG","Debugging, are you there??");
	                return EntityUtils.toString(resEntity);
	            }
	            
	        } catch (Exception e) {
	            e.printStackTrace();
	            Log.i("msg","Hello, my name is Tom Riddle...");
	          }
	    	
	    return null;
	
	}
	
	protected void onProgressUpdate(Integer... progress){
		Log.i("PROGRESS","Getting somewhere");
		}
	
	protected void onPostExecute(Long result) {
        Log.i("Yes", "gems are truly outrageous..");
        //showDialog("Recieved info from Database");
    }

}
