package org.konruvikt.kata_pp_313.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user")
public class UserViewController {

    @GetMapping
    public String showUserPage(){
        return "user";
    }
}
