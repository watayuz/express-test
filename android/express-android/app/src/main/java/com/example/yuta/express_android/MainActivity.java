package com.example.yuta.express_android;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        final TextView textView = (TextView)findViewById(R.id.textView);
        textView.setText("start get request");

        final String url = "http://192.168.12.1:8080/api";
        new Thread(new Runnable() {
            @Override
            public void run() {
                Request request = new Request(url);
                final String result = request.get();
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        textView.setText(result);
                    }
                });
            }
        }).start();
    }
}
