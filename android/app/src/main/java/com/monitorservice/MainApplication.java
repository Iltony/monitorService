package com.monitorservice;

import android.app.Application;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import com.facebook.react.HeadlessJsTaskService;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

	@Override
	public void onCreate() {
		super.onCreate();

    Intent myIntent = new Intent(getApplicationContext(), MyTaskService.class);
    myIntent.putExtra("defaultTimeout", 2000);
    getApplicationContext().startService(myIntent);
    HeadlessJsTaskService.acquireWakeLockNow(getApplicationContext());
		SoLoader.init(this, false);
	}
}
