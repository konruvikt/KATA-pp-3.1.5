package org.konruvikt.kata_pp_313.controllers;

import org.konruvikt.kata_pp_313.models.User;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserRestController {

    @GetMapping("/userAuth")
    public ResponseEntity<User> showAuthUser(@AuthenticationPrincipal User user) {
        return ResponseEntity.ok(user);
    }
}
