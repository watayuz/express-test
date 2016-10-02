package com.example.yuta.express_android;

import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Response;

import java.io.IOException;

/**
 * Created by yuta on 2016/10/02.
 */
public class Request {
    private String url = null;

    Request(String url){
        this.url = url;
    }

    public String get(){
        com.squareup.okhttp.Request request = new com.squareup.okhttp.Request.Builder()
                .url(this.url).get().build();
        OkHttpClient okHttpClient = new OkHttpClient();
        String result = "  ";
        try {
            Response response = okHttpClient.newCall(request).execute();
             result = response.body().string();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return result;
    }
}
