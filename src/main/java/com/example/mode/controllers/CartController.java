package com.example.mode.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mode.dao.OrderRepository;
import com.example.mode.dao.UserDao;
import com.example.mode.models.Order;
import com.example.mode.models.User;
import com.example.mode.utils.JWTUtil;



@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired
    private OrderRepository orderRepository;
    
    @Autowired
	private JWTUtil jwtUtil;
    
    @Autowired
    private UserDao	userDao;

    @PostMapping("/checkout")
    public ResponseEntity<String> checkoutCart(@RequestBody Order order, @RequestHeader(value="Authorization") String token) {
       
    	String clientId = jwtUtil.extractClientId(token);
	    User client = userDao.getUserById(Long.parseLong(clientId));
    	    
	    if (client == null) {
	        // Manejar el caso en el que el cliente no existe
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El cliente no existe");
	    }

	    order.setClient(client);
    	
    	orderRepository.save(order);

        return ResponseEntity.ok("Pedido guardado exitosamente");
    }
}
