package com.utec.tutoringapp.user.infrastructure;

import org.springframework.data.jpa.repository.JpaRepository;
import com.utec.tutoringapp.user.domain.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
