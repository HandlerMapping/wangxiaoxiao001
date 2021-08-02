package com.zouzheng.crm.controller;

import com.zouzheng.crm.domain.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.List;

@Controller
public class testController  {

    @RequestMapping("/a")
    public ModelAndView dome(){
        ModelAndView mv = new ModelAndView();
        mv.setViewName("a");
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return mv;
    }
    @RequestMapping("/dome3")
    @ResponseBody
    public String as(){
        System.out.println("进入了");
        return "hello,SpringBoot";
    }

    //进入b.html
    @RequestMapping("/b")
    public ModelAndView dome23(){
        ModelAndView mv = new ModelAndView();
        mv.setViewName("b");
        return mv;
    }

    //b.html按钮请求的接口
    @RequestMapping("/dome2")
    @ResponseBody
    public Object dome2() {
        User user=null;
        List<User> list =new ArrayList<>();
//        user=new User(1,"张三",18);
//        list.add(user);
//        user=new User(2,"里斯",25);
//        list.add(user);
        return list;
    }

}