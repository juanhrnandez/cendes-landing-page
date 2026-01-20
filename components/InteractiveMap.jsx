'use client';

import { Map, MapMarker, MarkerContent, MarkerTooltip } from '@/components/ui/map';
import { MapPin } from 'lucide-react';

export default function InteractiveMap({ locations }) {
    return (
        <div className="relative w-full h-full bg-gray-100">
            <Map 
                center={[-102.5528, 23.6345]} 
                zoom={4.5}
                className="w-full h-full"
                maxBounds={[[-120, 14], [-85, 33]]}
                interactive={false}
                scrollZoom={false}
                dragPan={false}
                dragRotate={false}
                doubleClickZoom={false}
                touchZoomRotate={false}
            >
                {locations.map((location, index) => (
                    <MapMarker
                        key={index}
                        longitude={location.lng}
                        latitude={location.lat}
                    >
                        <MarkerContent>
                            <div className="relative group">
                                {/* Animated pulse ring */}
                                <div 
                                    className="absolute inset-0 -m-2 rounded-full bg-purple-500 opacity-20 animate-ping"
                                    style={{ animationDelay: `${index * 0.15}s` }}
                                />
                                
                                {/* Pin container */}
                                <div className="relative bg-gray-900 rounded-full p-1.5 shadow-lg transition-transform group-hover:scale-125 ring-2 ring-white">
                                    <MapPin className="h-4 w-4 text-white" strokeWidth={2.5} />
                                </div>
                            </div>
                        </MarkerContent>
                        
                        <MarkerTooltip>
                            <div className="space-y-0.5">
                                <p className="font-bold text-sm">{location.name}</p>
                                <p className="text-xs text-muted-foreground">{location.students} estudiantes</p>
                            </div>
                        </MarkerTooltip>
                    </MapMarker>
                ))}
            </Map>
        </div>
    );
}
