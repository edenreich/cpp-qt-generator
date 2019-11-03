cmake_minimum_required(VERSION 3.14 FATAL_ERROR)

project(__APPLICATION_NAME___)

set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTORCC ON)
set(CMAKE_AUTOUIC ON)

if(CMAKE_VERSION VERSION_LESS "3.7.0")
    set(CMAKE_INCLUDE_CURRENT_DIR ON)
endif()

find_package(Qt5 COMPONENTS Core REQUIRED)

add_executable(__APPLICATION_NAME___
    main.cpp
    qml.qrc
)

target_link_libraries(__APPLICATION_NAME___ Qt5::Core)