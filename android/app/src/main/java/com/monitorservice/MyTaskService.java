package com.monitorservice;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.util.Log;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.jstasks.HeadlessJsTaskConfig;
import com.facebook.react.HeadlessJsTaskService;
import java.util.concurrent.TimeUnit;


public class MyTaskService extends HeadlessJsTaskService {
	private static final String TASK_NAME = "SomeTaskName";

	@Override
	protected @Nullable HeadlessJsTaskConfig getTaskConfig(Intent intent) {

		Bundle extras = intent.getExtras();
		WritableMap data = extras != null ? Arguments.fromBundle(extras) : Arguments.createMap();
		
		int timeout = 30; //extras.getInt("timeout");
		Log.d(TASK_NAME, String.format("Returning HeadlessJsTaskConfig, timeout=%s ms", timeout));
		return new HeadlessJsTaskConfig(TASK_NAME, data, TimeUnit.SECONDS.toMillis(timeout), true);
	}
  }