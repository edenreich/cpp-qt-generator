cmake_minimum_required(VERSION 3.14 FATAL_ERROR)

project(app)

set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTORCC ON)
set(CMAKE_AUTOUIC ON)

if(CMAKE_VERSION VERSION_LESS "3.7.0")
    set(CMAKE_INCLUDE_CURRENT_DIR ON)
endif()

find_package(Qt5 COMPONENTS Core REQUIRED)

add_executable(app
    main.cpp
)

target_link_libraries(app Qt5::Core)