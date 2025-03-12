
-- Sample data for military_branches
INSERT INTO military_branches (name, description, logo_url) VALUES
('Army', 'The United States Army is the land service branch of the United States Armed Forces.', 'images/branches/army.png'),
('Navy', 'The United States Navy is the maritime service branch of the United States Armed Forces.', 'images/branches/navy.png'),
('Air Force', 'The United States Air Force is the aerial and space warfare service branch of the United States Armed Forces.', 'images/branches/airforce.png'),
('Marines', 'The United States Marine Corps is a branch of the United States Armed Forces responsible for conducting expeditionary and amphibious operations.', 'images/branches/marines.png'),
('Coast Guard', 'The United States Coast Guard is the coastal defense, search and rescue, and maritime law enforcement branch of the United States Armed Forces.', 'images/branches/coastguard.png');

-- Sample data for military_careers
INSERT INTO military_careers (branch_id, title, description, requirements, training_period, image_url) VALUES
(1, 'Infantry Officer', 'Lead infantry units in combat operations and training.', 'Bachelor''s degree, ASVAB score of 110+, pass physical fitness test', '44 weeks', 'images/careers/infantry_officer.jpg'),
(1, 'Combat Medic', 'Provide emergency medical treatment on the battlefield.', 'High school diploma, ASVAB score of 105+, pass physical fitness test', '16 weeks', 'images/careers/combat_medic.jpg'),
(2, 'Naval Aviator', 'Pilot aircraft from aircraft carriers and naval bases.', 'Bachelor''s degree, pass flight aptitude test, 20/20 vision', '2 years', 'images/careers/naval_aviator.jpg'),
(3, 'Cyber Operations Officer', 'Lead teams protecting Air Force networks from cyber threats.', 'Bachelor''s degree in computer science or related field, security clearance', '12 weeks', 'images/careers/cyber_operations.jpg'),
(4, 'Reconnaissance Marine', 'Gather intelligence behind enemy lines.', 'ASVAB score of 105+, first-class PFT score, swimming qualifications', '8 weeks after boot camp', 'images/careers/recon_marine.jpg');

-- Sample data for fitness_plans
INSERT INTO fitness_plans (title, description, difficulty, duration_weeks, target_branch_id) VALUES
('Army Basic Training Prep', 'A comprehensive plan to prepare you for the physical demands of Army Basic Combat Training.', 'beginner', 8, 1),
('Navy SEAL Preparation', 'An advanced training program designed to help candidates prepare for the rigorous Navy SEAL selection process.', 'advanced', 12, 2),
('Air Force PT Test Ready', 'A focused program to help you excel in the Air Force Physical Fitness Test.', 'intermediate', 6, 3),
('Marine Corps Combat Fitness', 'Intensive program focusing on combat-related physical capabilities required by the Marine Corps.', 'advanced', 10, 4),
('General Military Fitness', 'A well-rounded fitness program suitable for candidates applying to any military branch.', 'beginner', 6, NULL);

-- Sample data for exercises
INSERT INTO exercises (name, description, muscle_group, equipment_needed, video_url) VALUES
('Push-ups', 'Standard military push-up with proper form.', 'Chest, Triceps, Shoulders', 'None', 'videos/exercises/pushups.mp4'),
('Pull-ups', 'Overhand grip pull-ups to chin over bar.', 'Back, Biceps', 'Pull-up bar', 'videos/exercises/pullups.mp4'),
('Sit-ups', 'Standard military sit-up with proper form.', 'Abdominals', 'None', 'videos/exercises/situps.mp4'),
('Running', 'Steady-pace running for endurance.', 'Cardiovascular, Legs', 'None', 'videos/exercises/running.mp4'),
('Deadlifts', 'Proper form barbell deadlifts.', 'Lower back, Hamstrings, Glutes', 'Barbell, weights', 'videos/exercises/deadlifts.mp4');

-- Sample data for workouts
INSERT INTO workouts (plan_id, title, description, day_number, duration_minutes) VALUES
(1, 'Endurance Basics', 'Focus on building cardio endurance with running and bodyweight exercises.', 1, 45),
(1, 'Upper Body Strength', 'Develop upper body pushing and pulling strength.', 2, 40),
(1, 'Lower Body Power', 'Build leg strength and power for marching and field operations.', 3, 50),
(1, 'Core Stabilization', 'Strengthen core muscles for overall stability and injury prevention.', 4, 35),
(1, 'Interval Training', 'High-intensity interval training to build speed and recovery capacity.', 5, 30);

-- Sample data for workout_exercises
INSERT INTO workout_exercises (workout_id, exercise_id, sets, reps, duration, rest_time, notes, order_num) VALUES
(1, 4, 1, '1', '20 minutes', '0', 'Steady pace run at 70% effort', 1),
(1, 1, 3, '20', NULL, '60 seconds', 'Focus on proper form', 2),
(1, 3, 3, '25', NULL, '60 seconds', 'Full range of motion', 3),
(2, 1, 4, '25', NULL, '90 seconds', 'Vary hand positions', 1),
(2, 2, 4, '10', NULL, '90 seconds', 'Full extension at bottom', 2);

-- Sample data for study_materials
INSERT INTO study_materials (title, description, category, file_path, thumbnail_url) VALUES
('ASVAB Mathematics Study Guide', 'Comprehensive guide to the mathematics portion of the ASVAB test.', 'ASVAB', 'files/study/asvab_math.pdf', 'images/study/asvab_math.jpg'),
('Military Ranks and Recognition', 'Learn to identify all ranks across military branches.', 'Military Knowledge', 'files/study/military_ranks.pdf', 'images/study/ranks.jpg'),
('Basic First Aid for Combat', 'Essential first aid techniques useful in combat situations.', 'Medical', 'files/study/first_aid.pdf', 'images/study/first_aid.jpg'),
('Navigation and Land Orientation', 'Guide to map reading, compass use, and land navigation.', 'Field Skills', 'files/study/navigation.pdf', 'images/study/navigation.jpg'),
('Military Code of Conduct', 'Study material covering the military code of conduct and ethics.', 'Military Knowledge', 'files/study/code_of_conduct.pdf', 'images/study/code.jpg');

-- Sample data for practice_tests
INSERT INTO practice_tests (title, description, category, time_limit_minutes, passing_score) VALUES
('ASVAB Practice Test 1', 'General ASVAB practice test covering all sections.', 'ASVAB', 180, 70),
('Army Basic Knowledge Test', 'Test your knowledge of Army history, ranks, and protocols.', 'Army', 60, 80),
('Physical Training Standards Quiz', 'Test your knowledge of PT requirements across branches.', 'Fitness', 30, 75),
('Military Leadership Principles', 'Assess your understanding of core military leadership concepts.', 'Leadership', 45, 70),
('Combat First Aid Scenarios', 'Scenario-based test of combat medical knowledge.', 'Medical', 40, 80);

-- Sample questions for the first practice test
INSERT INTO questions (test_id, question_text, question_type, difficulty, points) VALUES
(1, 'If a vehicle travels 270 miles on 15 gallons of fuel, how many miles per gallon does it get?', 'multiple_choice', 'easy', 1),
(1, 'The word that is most nearly opposite in meaning to "trivial" is:', 'multiple_choice', 'medium', 1),
(1, 'If the frequency of a wave is 440 Hz and its wavelength is 0.75 meters, what is its speed?', 'multiple_choice', 'hard', 2),
(1, 'In an electrical circuit, voltage is analogous to:', 'multiple_choice', 'medium', 1),
(1, 'A vehicle engine\'s timing belt needs replacement every 60,000 miles. True or False?', 'true_false', 'easy', 1);

-- Sample options for the first question
INSERT INTO question_options (question_id, option_text, is_correct) VALUES
(1, '18 miles per gallon', TRUE),
(1, '15 miles per gallon', FALSE),
(1, '20 miles per gallon', FALSE),
(1, '22.5 miles per gallon', FALSE);

-- Sample options for the second question
INSERT INTO question_options (question_id, option_text, is_correct) VALUES
(2, 'Significant', TRUE),
(2, 'Small', FALSE),
(2, 'Unimportant', FALSE),
(2, 'Relevant', FALSE);

-- Sample articles
INSERT INTO articles (title, content, author, image_url, category, tags) VALUES
('Preparing Mentally for Basic Training', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...', 'Sgt. James Wilson', 'images/articles/mental_prep.jpg', 'Training', 'basic training,mental preparation,resilience'),
('Top 10 ASVAB Study Tips', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...', 'Emily Rodriguez', 'images/articles/asvab_study.jpg', 'Education', 'ASVAB,study tips,testing'),
('Military Career Paths After Service', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...', 'Col. Robert Thompson (Ret.)', 'images/articles/career_paths.jpg', 'Careers', 'veterans,career planning,post-service');

-- Sample events
INSERT INTO events (title, description, location, start_date, end_date, image_url) VALUES
('Military Career Fair', 'Meet recruiters from all branches and learn about career opportunities.', 'Convention Center, Washington DC', '2023-06-15 09:00:00', '2023-06-15 17:00:00', 'images/events/career_fair.jpg'),
('ASVAB Prep Workshop', 'Free workshop to help prepare for the ASVAB test with practice questions and study strategies.', 'Public Library, Room 103, Boston MA', '2023-06-22 13:00:00', '2023-06-22 16:00:00', 'images/events/asvab_workshop.jpg'),
('Physical Training Boot Camp', 'Two-day intensive boot camp to prepare for military physical fitness tests.', 'Memorial Park, Houston TX', '2023-07-08 08:00:00', '2023-07-09 15:00:00', 'images/events/pt_bootcamp.jpg');

-- Sample admin user
INSERT INTO users (username, email, password, first_name, last_name, role) VALUES
('admin', 'admin@militaryprepcompanion.com', '$2y$10$UAn1SYhEFvtxgiYAkm1fXeZS89J0qC1aFqoYXN1.YYHuNKnJxnVXK', 'Admin', 'User', 'admin');
-- Password is 'admin123' - for development only
