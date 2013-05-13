package com.sp.norsesquare.froyo;

import java.net.URI;
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
import org.apache.http.params.HttpParams;
import org.apache.http.protocol.HTTP;
import org.apache.http.util.EntityUtils;


import android.os.AsyncTask;
import android.util.Log;


/*Class to allow for backround database calls to be made in alternate threads */
public class LoginDatabaseTask extends AsyncTask<String, Void, Integer>
{
	
	
	String fname;
	String lname;
	String email;
	String gid;

	public LoginDatabaseTask(String fname, String lname, String email, String gid) {
		// TODO Auto-generated constructor stub
		this.fname = fname;
		this.lname = lname;
		this.email = email;
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
	protected Integer doInBackground(String... args)
	{
		// TODO Add database calls, differentiation.
	    	try {
	            HttpClient client = new DefaultHttpClient();  
	            URI postURL = new URI("http://norsesquare.luther.edu/services/login.php");
	            HttpGet get = new HttpGet();
	            get.setURI(postURL);
	            List<NameValuePair> params = new ArrayList<NameValuePair>();
	            params.add(new BasicNameValuePair("fname", "tom"));
	            params.add(new BasicNameValuePair("lname", "bombadil"));
	            params.add(new BasicNameValuePair("username", "bombadilio@murky.woods"));
	            params.add(new BasicNameValuePair("googleid", "1111111"));
	            UrlEncodedFormEntity ent = new UrlEncodedFormEntity(params,HTTP.UTF_8);
	            get.setParams((HttpParams) params);
	            HttpResponse responsePOST = client.execute(get);  
	            HttpEntity resentity = responsePOST.getEntity();  
	            if (resentity != null) {    
		                Log.i("RESPONSE",EntityUtils.toString(resentity));
		                Log.i("DEBUG","Debugging, logging in??");
		     
		            }
	            else{Log.i("wft", "i dont know what the fuck is oging on");}
	            
	        } catch (Exception e) {
	            e.printStackTrace();
	            Log.i("msg","its over 9000!!");
	          }
	    	
	    return 1;
	
	}
	
	protected void onProgressUpdate(Integer... progress){
		Log.i("PROGRESS","Getting somewhere");
		}
	
	protected void onPostExecute(Long result) {
        Log.i("Yes", "fueled up and ready to go");
        //showDialog("Received info from Database");
    }
	
	

}
