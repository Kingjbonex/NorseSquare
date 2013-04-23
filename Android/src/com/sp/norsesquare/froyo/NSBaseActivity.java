package com.sp.norsesquare.froyo;

//import static android.view.View.INVISIBLE;
//import static android.view.View.VISIBLE;
import android.os.Bundle;
import android.support.v4.app.FragmentTransaction;
import android.support.v4.app.ListFragment;
import android.util.Log;
import android.view.View;
import android.widget.Toast;

import com.actionbarsherlock.view.Menu;
import com.actionbarsherlock.view.MenuItem;
import com.slidingmenu.lib.SlidingMenu;
import com.slidingmenu.lib.app.SlidingFragmentActivity;



public abstract class NSBaseActivity extends SlidingFragmentActivity {

	//declaration of the upper class for callbacks or whatevs in onOptionsItemSelected
	NorseSquare ns;
	
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
		
	}
	
	public void setUpSlidingMenu()
	{
		SlidingMenu sm = getSlidingMenu();
		
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
		
		//set the icon up as clickable - 
		getSupportActionBar().setDisplayHomeAsUpEnabled(true);
		//use app icon
		getSupportActionBar().setIcon(R.drawable.ic_launcher);
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
    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle item selection
//    	View mapFrag = (View) findViewById(R.id.RelativeMapLayout);
//    	View controlFrag = (View) findViewById(R.id.main_control_panel);
     	
        switch (item.getItemId())
        {
			case android.R.id.home:
				toggle();
//				mapFrag.setBackgroundResource(R.color.trans);
//				controlFrag.setBackgroundResource(R.color.trans);
//				getSlidingMenu().setViewAbove(mapFrag);
				
//				if (visible==true)
//				{
//					visible = false;
//					
//					mapFrag.setVisibility(INVISIBLE);
//				}
//				else
//				{
//					visible = true;
//					mapFrag.setVisibility(VISIBLE);
//				}
				Log.i(TAG, "Sliding menu Clicked");
				return true;
            case R.id.menu_settings_reveal_location:
                if (item.isChecked())
                {
                	ns.setReleaseLocation(false);
                	item.setChecked(false);
                }
                else
                {
                	ns.setReleaseLocation(true);
                	item.setChecked(true);
                }
                return true;
            case R.id.menu_settings_david_duba:
            {
            	if (item.isChecked())
            	{
            		Toast toast = Toast.makeText(this, "Hi Duba!!!", Toast.LENGTH_LONG);
            		toast.show();
            	}
            }
            default:
                return super.onOptionsItemSelected(item);
        }
    }

	public void onConnected()
	{
		// TODO Auto-generated method stub
		
	}

	public void onDisconnected()
	{
		// TODO Auto-generated method stub
		
	}
    
    
}
