package com.sp.norsesquare.froyo;

//import static android.view.View.INVISIBLE;
//import static android.view.View.VISIBLE;
import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.FragmentTransaction;
import android.support.v4.app.ListFragment;
import android.util.Log;

import com.actionbarsherlock.view.Menu;
import com.actionbarsherlock.view.MenuItem;
import com.slidingmenu.lib.SlidingMenu;
import com.slidingmenu.lib.app.SlidingFragmentActivity;

/* Base class required to create the necessary inheritance for the sliding menu, allow NorseSquare.java to
 * use sliding menu features without blowing up. 
 * 
 */

public abstract class NSBaseActivity extends SlidingFragmentActivity {

	//declaration of the upper class for callbacks or whatevs in onOptionsItemSelected
	NorseSquare ns;
	
	SlidingMenu sm;
	
	private boolean visible = true;
	
	//gotta have it private first (right?)
	private int mTitleRes;
	protected ListFragment mFrag;
	
	private final String TAG = "Base Activity";
	
    
	
	
	public NSBaseActivity(int titleRes)
	{
		mTitleRes = titleRes;

	}
	
	@Override
	public void onCreate(Bundle savedInstanceState)
	{
		super.onCreate(savedInstanceState);
		
		//set the title of the menu bar to mTitleRes.
		setTitle(mTitleRes);
		
		
		setBehindContentView(R.layout.menu_frame);
		//beginning the transaction of creating a new list.
		FragmentTransaction fragtrans = this.getSupportFragmentManager().beginTransaction();
		mFrag = new SlideList();
		//put the mFrag into the frame.
		fragtrans.replace(R.id.menu_frame, mFrag);
		//commits the transition and makes it execute
		fragtrans.commit();
		
		setUpSlidingMenu();
		//set the icon up as clickable - 
		getSupportActionBar().setDisplayHomeAsUpEnabled(true);
		//use app icon
		getSupportActionBar().setIcon(R.drawable.ic_launcher);
	}
	
	public void setUpSlidingMenu()
	{
		sm = getSlidingMenu();
		
		//This is already in pixels, if you have res in there, then you have to specify an xml file.
		
		sm.setShadowWidth(15);
		sm.setShadowDrawable(R.drawable.shadow);
		sm.setBehindOffset(80);
		//default
		sm.setFadeDegree(0.35f);
		sm.setTouchModeAbove(SlidingMenu.TOUCHMODE_MARGIN);
		
//		sm.setOnOpenListener(new OnOpenListener() {
//			@Override
//			public void onOpen() {
//				
//			}
//		});
		
		
		//
//		sm.setOnOpenListener(new OnClickListener()
//		{
//			public void onClick(View Arg0) {
//				String name, comment, other;
//				
//				EditText nameIn = (EditText) view.findViewById(R.id.nameIn);
//				EditText commentIn = (EditText) view.findViewById(R.id.commentIn);
//				EditText otherIn = (EditText) view.findViewById(R.id.otherIn);
//				
//				name = nameIn.getText().toString();
//				comment = commentIn.getText().toString();		
//				other = otherIn.getText().toString();
//				
//				
//				TextView nameOut = (TextView) view.findViewById(R.id.name);
//				TextView commentOut = (TextView) view.findViewById(R.id.comment);
//				TextView otherOut = (TextView) view.findViewById(R.id.other);
//				
//				nameOut.setText(name);
//				commentOut.setText(comment);
//				otherOut.setText(other);				
//			}
//		});
	}
	
	
	public boolean onCreateOptionsMenu(Menu menu) 
	{
		// Inflate the menu; this adds items to the action bar if it is present.
		getSupportMenuInflater().inflate(R.menu.menu_main_settings, menu);
		return true;
	}
	
	public SlidingMenu getNsSlidingMenu() 
	{	
		return sm;
	}
	
	public void myToggle() 
	{
		toggle();
	}
	
    @Override
    public boolean onOptionsItemSelected(MenuItem item) 
    {
        // Handle item selection
//    	View mapFrag = (View) findViewById(R.id.RelativeMapLayout);
//    	View controlFrag = (View) findViewById(R.id.main_control_panel);
     	
        switch (item.getItemId())
        {
			case android.R.id.home:
				myToggle();
				Log.i(TAG, "Sliding menu item Clicked");
				return true;
				
			case R.id.exit_button:
				Log.i(TAG, "Exiting");
//				Intent intent = new Intent(Intent.ACTION_MAIN);
//				intent.addCategory(Intent.CATEGORY_HOME);
//				intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
//				startActivity(intent);
				finish();
				return true;
            default:
                return super.onOptionsItemSelected(item);
        }
    }
    
//    menu = getSlidingMenu();
//    @Override
//    public void onBackPressed() {
//    if (getSlidingMenu().isShown()) {
//        getSlidingMenu().showContent(true);
//        return;
//    }
//
//    super.onBackPressed();
//}

	public void onConnected()
	{
		// TODO Auto-generated method stub
		
	}

	public void onDisconnected()
	{
		// TODO Auto-generated method stub
		
	}
    
    
}
