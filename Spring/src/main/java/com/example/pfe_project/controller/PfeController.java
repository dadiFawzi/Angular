package com.example.pfe_project.controller;

import com.example.pfe_project.model.Pfe;
import com.example.pfe_project.repository.PfeRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

@RestController
@RequestMapping("/pfe-projects")
@CrossOrigin(origins = "http://localhost:4200")
public class PfeController {


    @Autowired
    private PfeRepository repository;

    @GetMapping("")
    public List<Pfe> getAll() {

        return (List<Pfe>) repository.findAll();
    }

@GetMapping("type/{type}")
public List<Pfe> getPfeByType(@PathVariable ("type")String type){

        ArrayList<Pfe> l = (ArrayList<Pfe>) repository.findAll();
        List<Pfe> l2 = new ArrayList<Pfe>();
   l.forEach((p)-> {
       System.out.println(p.getTitle());
       System.out.println("type :"+p.getType());
       if(p.getType().equals(type)){
           l2.add(p);
           System.out.println(p.getType());
       };
        
    });
        
        
    return l2;
}

@GetMapping("search/{title}")
    public List<Pfe> getPfeByTitle(@PathVariable("title") String  title){
    ArrayList<Pfe> l = (ArrayList<Pfe>) repository.findAll();
    List<Pfe> l2 = new ArrayList<Pfe>();
    System.out.println("looking for title:"+title);
    l.forEach((p)-> {
        System.out.println(p.getTitle());
        System.out.println("type :"+p.getTitle());
        if(p.getTitle().contains(title)){
            System.out.println(title+"exist #########");
            l2.add(p);
            System.out.println(p.getTitle());
        };

    });


    return l2;
    }

/*
@GetMapping("search/{title}")
public String getPfeByTitle(RedirectAttributes redirectAttributes,@PathVariable("title") String title){
        redirectAttributes.addAttribute("pfe",repository.findByTitle(title));
        return  "redirect:http://localhost:4200/search";
}
*/
    @PostMapping("addpfe")
    public void addpfe(@RequestBody Pfe pfe) {
        repository.save(pfe);
    }

    @DeleteMapping("deletepfe/{id}")
    public void deletepfe(@PathVariable("id")int id) {

        repository.deleteById(id);
    }



}
