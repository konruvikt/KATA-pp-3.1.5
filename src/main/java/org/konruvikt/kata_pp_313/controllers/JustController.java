package org.konruvikt.kata_pp_313.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class JustController {

    @GetMapping("admin")
    public String showJustPage(){
        return "user-list";
    }
}