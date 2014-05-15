#!/bin/sh

old_cwd=`pwd`
cd `dirname $0`

sh ../buildAgent/bin/agent.sh start
sh ./teamcity-server.sh run

cd $old_cwd
