#!/bin/sh 
branch_name=$1
git branch $branch_name
git checkout $branch_name