//
//  BaseRNDemoStagingApp.swift
//  Shared
//
//  Created by caro on 2022/2/8.
//

import SwiftUI

@main
struct BaseRNDemoStagingApp: App {
    let persistenceController = PersistenceController.shared

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(\.managedObjectContext, persistenceController.container.viewContext)
        }
    }
}
