package org.konruvikt.kata_pp_313.controllers;

import org.konruvikt.kata_pp_313.models.User;
import org.konruvikt.kata_pp_313.services.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminController {

    private final UserService userService;

    public AdminController(UserService userService) {
        this.userService = userService;
    }


    @GetMapping
    public List<User> findAll(){
        List<User> allUsers = userService.findAll();
        return allUsers;
    }

    @GetMapping("/{id}")
    public User findUser(@PathVariable("id") Long id) {
        User user = userService.findById(id);
        return user;
    }

    @PostMapping
    public User createUser(@RequestBody User user){
        userService.saveOrUpdateUser(user);
        return user;
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable("id") Long id) {
        userService.deleteById(id);
    }

    @PatchMapping
    public User updateUser(@RequestBody User user){
        userService.saveOrUpdateUser(user);
        return user;
    }
}
