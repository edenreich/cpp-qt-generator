import { workspace, InputBoxOptions, window } from 'vscode';
import { writeFile, readFileSync } from 'fs';
import { join, resolve } from 'path';
import { execSync, exec } from 'child_process';


export class Handlers {

    /**
     * Create a new Qt Widgets Application.
     * 
     * @return Promise<void>
     */
    public static async createQtWidgetsApplication(): Promise<void> {
        
        console.log("from createQtWidgetsApplication");
        // @todo cp cmake template project into current directory.
    }

    /**
     * Create a new Qt Console Application.
     * 
     * @return Promise<void>
     */
    public static async createQtConsoleApplication(): Promise<void> {

        console.log("from createQtConsoleApplication");
        // @todo cp cmake template project into current directory.
    }

    /**
     * Create a new Qt Quick Application.
     * 
     * @return Promise<void>
     */
    public static async createQtQuickApplication(): Promise<void> {

        console.log("from createQtQuickApplication");
        // @todo cp cmake template project into current directory.
    }
    
}


/**
 * Simple util to replace all tokens with another.
 * 
 * @param str
 * @param replacements
 * @return string
 */
function replaceAll(str: string, replacements: {[key: string]: string}): string {
    const pattern = new RegExp(Object.keys(replacements).join('|'), 'gi');

    return str.replace(pattern, (match: string) => {
        return replacements[match];
    });
}
